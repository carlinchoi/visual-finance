package carlinchoi.visualfinance.dao;

import carlinchoi.visualfinance.model.RegisterUserDto;
import carlinchoi.visualfinance.model.User;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Component
public class JdbcUserDao implements UserDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcUserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int findIdByUsername(String username) {
        if (username == null) throw new IllegalArgumentException("Username cannot be null");

        int userId;
        try {
            userId = jdbcTemplate.queryForObject("select user_id from users where username = ?", int.class, username);
        } catch (EmptyResultDataAccessException e) {
            throw new UsernameNotFoundException("User " + username + " was not found.");
        }

        return userId;
    }

	@Override
	public User getUserById(int userId) {
		String sql = "SELECT * FROM users WHERE user_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
		if (results.next()) {
			return mapRowToUser(results);
		} else {
			return null;
		}
	}

    @Override
    public User getUserByUsername(String username) {
        String sql = "SELECT * FROM users WHERE username = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, username);
        if (results.next()) {
            return mapRowToUser(results);
        } else {
            return null;
        }
    }

    @Override
    public void deleteUser(User user) {
        String sql = "DELETE FROM public.users\n" +
                "\tWHERE username = ?;";
        jdbcTemplate.update(sql, user.getUsername());
    }

    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        String sql = "select * from users";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while (results.next()) {
            User user = mapRowToUser(results);
            users.add(user);
        }

        return users;
    }

    @Override
    public User findByUsername(String username) {
        if (username == null) throw new IllegalArgumentException("Username cannot be null");

        for (User user : this.findAll()) {
            if (user.getUsername().equalsIgnoreCase(username)) {
                return user;
            }
        }
        throw new UsernameNotFoundException("User " + username + " was not found.");
    }

    @Override
    public User findByEmail(String email) {
        if(email == null) throw new IllegalArgumentException("Email cannot be null");

        for(User user: this.findAll()) {
            if(user.getEmail().equalsIgnoreCase(email)) {
                return user;
            }
        }
        throw new UsernameNotFoundException(email + " was not found.");
    }

    @Override
    public boolean create(String email, String password, String firstName, String lastName, String role) {
        String insertUserSql = "insert into users (email,password_hash, first_name, last_name, role) values (?,?,?,?,?)";
        String password_hash = new BCryptPasswordEncoder().encode(password);
        String ssRole = role.toUpperCase().startsWith("ROLE_") ? role.toUpperCase() : "ROLE_" + role.toUpperCase();

        return jdbcTemplate.update(insertUserSql, email, password_hash, firstName, lastName, ssRole) == 1;
    }

    @Override
    public void updateUser(User user) {
        String sql = "UPDATE users\n" +
                "\tSET role='ROLE_VOLUNTEER'\n" +
                "\tWHERE user_id= ?;";
        //User user = new User();
        //user.setId(userId);
        jdbcTemplate.update(sql, user.getId());
    }

    @Override
    public void updateUserPassword(User databaseUser, RegisterUserDto user) {
        String sql = "UPDATE users\n" +
                "\tSET password_hash= ?\n" +
                "\tWHERE user_id= ?;";
        String password_hash = new BCryptPasswordEncoder().encode(user.getPassword());
        jdbcTemplate.update(sql, password_hash, databaseUser.getId());
    }

    @Override
    public boolean createPendingVolunteerUser(User volunteerPendingUser) {
        String insertUserSql = "insert into users (username,password_hash,email, first_name, last_name, phone,role) values (?,?,?,?,?,?,?)";
        System.out.println(insertUserSql);
        System.out.println(volunteerPendingUser);
        String password_hash = new BCryptPasswordEncoder().encode(volunteerPendingUser.getTempPassword());
        System.out.println(password_hash);
        return jdbcTemplate.update(insertUserSql, volunteerPendingUser.getUsername(), password_hash,volunteerPendingUser.getEmail(),volunteerPendingUser.getFirstName(),volunteerPendingUser.getLastName(),"ROLE_PENDINGVOLUNTEER")==1;
    }
    @Override
    public void updatePendingVolunteerUser(User volunteerPendingUser) {
        String insertUserSql = "UPDATE users SET  email=?, first_name=?, last_name=? WHERE username=?";
        System.out.println(insertUserSql);
        System.out.println(volunteerPendingUser);
        jdbcTemplate.update(insertUserSql,volunteerPendingUser.getEmail(),volunteerPendingUser.getFirstName(),volunteerPendingUser.getLastName(),volunteerPendingUser.getUsername() );
    }

    @Override
    public List<User> findAllVolunteersAndAdmin() {
        List<User> volunteers = new ArrayList<>();
        String sql = "SELECT * FROM users WHERE role IN ('ROLE_VOLUNTEER', 'ROLE_ADMIN');";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql);

        while (result.next()) {
            volunteers.add(mapRowToUser(result));
        }
        return volunteers;
    }


    @Override
    public void updateUserApplicationStatus(int userId, String newStatus) {
        String sql = "UPDATE users SET application_status = ? WHERE user_id = ?;";
        jdbcTemplate.update(sql, newStatus, userId);
    }



    @Override
    public void updateUserRole(int userId, String newRole) {
        String sql = "UPDATE users SET role = ? WHERE user_id = ?";
        jdbcTemplate.update(sql, newRole, userId);
    }
    //comment


    private User mapRowToUser(SqlRowSet rs) {
        User user = new User();
        user.setId(rs.getInt("user_id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password_hash"));
        user.setAuthorities(Objects.requireNonNull(rs.getString("role")));
        user.setRole(rs.getString("role"));
        user.setEmail(rs.getString("email"));
        user.setFirstName(rs.getString("first_name"));
        user.setLastName(rs.getString("last_name"));
        user.setActivated(true);
        return user;
    }
}

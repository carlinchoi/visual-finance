package carlinchoi.visualfinance.dao;

import carlinchoi.visualfinance.model.RegisterUserDto;
import carlinchoi.visualfinance.model.User;

import java.util.List;

public interface UserDao {

    List<User> findAll();

    User getUserById(int userId);

    User findByUsername(String username);

    int findIdByUsername(String username);

    User findByEmail(String email);
    boolean create(String email, String password, String role);

    void updateUser(User user);

    User getUserByUsername(String username);

    void deleteUser(User username);

    void updateUserPassword(User databaseUser, RegisterUserDto user);

    boolean createPendingVolunteerUser(User volunteerPendingUser);

    void updatePendingVolunteerUser(User volunteerPendingUser);



    List<User> findAllVolunteersAndAdmin();

    void updateUserApplicationStatus(int userId, String newStatus);

    void updateUserRole(int userId, String newRole);
}

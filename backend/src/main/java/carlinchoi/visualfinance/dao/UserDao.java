package carlinchoi.visualfinance.dao;

import carlinchoi.visualfinance.model.RegisterUserDto;
import carlinchoi.visualfinance.model.User;

import java.util.List;

public interface UserDao {

    List<User> findAll();

    User getUserById(int userId);


    int findIdByUsername(String username);

    User findByEmail(String email);
    boolean create(String email, String password, String role, String firstName, String lastName);

    void updateProfile(User user);



    void deleteUser(User username);

    void updateUserPassword(User databaseUser, RegisterUserDto user);


    void updateUserRole(int userId, String newRole);

}

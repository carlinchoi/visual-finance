package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.dao.UserDao;
import carlinchoi.visualfinance.model.UpdateProfileDto;
import carlinchoi.visualfinance.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/user")
@CrossOrigin

public class UserController {
    private UserDao userDao;

    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value="/all", method = RequestMethod.GET)
        public List<User> findAll() {
        List<User> allUsers = userDao.findAll();
        return allUsers;
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
        public User getUserById(@PathVariable("userId") int userId) {
            User user = userDao.getUserById(userId);
            return user;
        }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/update-profile", method = RequestMethod.PATCH)
    public void updateProfile(@RequestBody UpdateProfileDto updateProfileDto) {
        // Assuming you have the user's email in the authentication context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName();

        User user = userDao.findByEmail(userEmail);
        if (user != null) {
            // Check if email field is provided and not empty
            if (updateProfileDto.getEmail() != null && !updateProfileDto.getEmail().isEmpty()) {
                user.setEmail(updateProfileDto.getEmail());
            }

            // Check if first name field is provided and not empty
            if (updateProfileDto.getFirstName() != null && !updateProfileDto.getFirstName().isEmpty()) {
                user.setFirstName(updateProfileDto.getFirstName());
            }

            // Check if last name field is provided and not empty
            if (updateProfileDto.getLastName() != null && !updateProfileDto.getLastName().isEmpty()) {
                user.setLastName(updateProfileDto.getLastName());
            }

            // Check if password field is provided and not empty
            if (updateProfileDto.getPassword() != null && !updateProfileDto.getPassword().isEmpty()) {
                // You might want to hash the password before setting it in the user object
                String hashedPassword = hashPassword(updateProfileDto.getPassword());
                user.setPassword(hashedPassword);
            }

            // Update the user in the database
            userDao.updateProfile(user);
        }
    }

    private String hashPassword(String password) {
        return new BCryptPasswordEncoder().encode(password);
    }


    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{username}", method = RequestMethod.DELETE)
    public void deleteUser(@RequestBody User user, @PathVariable("email") String email) {
        user = userDao.findByEmail(email);
        userDao.deleteUser(user);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/user-role/{userId}", method = RequestMethod.PUT)
    public void updateUserRole(@PathVariable("userId") int userId, @RequestParam String newRole) {
        userDao.updateUserRole(userId, newRole);
    }




}


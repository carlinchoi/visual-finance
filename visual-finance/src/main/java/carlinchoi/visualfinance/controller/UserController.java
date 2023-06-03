package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.dao.UserDao;
import carlinchoi.visualfinance.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/user")
@CrossOrigin

public class UserController {
    private UserDao userDao;

    public UserController(UserDao userDao) {
        //this.pet = pet;
        this.userDao = userDao;
    }

    //(`/user/${userId}`)
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
        public User getUserById(@PathVariable("userId") int userId) {
            User user = userDao.getUserById(userId);
            return user;
        }
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{username}/update-password", method = RequestMethod.PUT)
    public void updateUser(@RequestBody String password, @PathVariable("username") String username) {
        User user = userDao.getUserByUsername(username);
        user.setPassword(password);
        System.out.println(user.getPassword() + user.getUsername());
        userDao.updateUser(user);
    }
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{username}", method = RequestMethod.DELETE)
    public void deleteUser(@RequestBody User user, @PathVariable("username") String username) {
        user = userDao.getUserByUsername(username);
        userDao.deleteUser(user);
    }
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value="/pending-volunteer",method=RequestMethod.POST)
    public boolean pendingVolunteer(@RequestBody User user){
        return userDao.createPendingVolunteerUser(user);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value="/pending-volunteer",method=RequestMethod.PUT)
    public void updateVolunteer(@RequestBody User user){
         userDao.updatePendingVolunteerUser(user);
    }



    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/pending-volunteer/{userId}", method = RequestMethod.PUT)
    public void updatePendingVolunteerRole(@PathVariable("userId") int userId, @RequestParam String newRole) {
        userDao.updateUserRole(userId, newRole);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/volunteer", method = RequestMethod.GET)
    List<User> findAllVolunteersAndAdmin() {
        List<User> volunteerList = userDao.findAllVolunteersAndAdmin();
        return volunteerList;
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/application-status/{userId}", method = RequestMethod.PUT)
    public void updateUserApplicationStatus(@PathVariable("userId") int userId, @RequestParam String newStatus) {
        userDao.updateUserApplicationStatus(userId, newStatus);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/user-role/{userId}", method = RequestMethod.PUT)
    public void updateUserRole(@PathVariable("userId") int userId, @RequestParam String newRole) {
        userDao.updateUserRole(userId, newRole);
    }




}


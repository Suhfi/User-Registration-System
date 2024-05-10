package com.hailzcode.userregistry.controller;

import com.hailzcode.userregistry.entities.User;
import com.hailzcode.userregistry.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("users")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping
    public String saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @PutMapping()
    public String updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }
    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("{id}")
    public User getUserById(@PathVariable Integer id){
        return userService.getUserById(id);
    }
    @DeleteMapping("{id}")
    public String deleteUserById(@PathVariable Integer id){
        return userService.deleteUser(id);
    }

}

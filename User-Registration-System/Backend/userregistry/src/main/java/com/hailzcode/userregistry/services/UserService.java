package com.hailzcode.userregistry.services;

import com.hailzcode.userregistry.entities.User;

import java.util.List;

public interface UserService {
    public String saveUser(User user);
    public String updateUser(User user);
    public List<User> getAllUsers();
    public User getUserById(Integer id);
    public String deleteUser(Integer id);
}

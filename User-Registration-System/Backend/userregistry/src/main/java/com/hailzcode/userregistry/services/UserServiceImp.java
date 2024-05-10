package com.hailzcode.userregistry.services;

import com.hailzcode.userregistry.entities.User;
import com.hailzcode.userregistry.exception.UserNotFoundException;
import com.hailzcode.userregistry.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImp implements UserService{
    @Autowired
    UserRepository userRepository;
    @Override
    public String saveUser(User user) {
        userRepository.save(user);
        return "User added successfully";
    }

    @Override
    public String updateUser(User user) {
        userRepository.save(user);
        return "User updated successfully";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Integer id) {
        return userRepository.findById(id).orElseThrow(()-> new UserNotFoundException(id));
    }

    @Override
    public String deleteUser(Integer id) {
        userRepository.deleteById(id);
        return "User deleted successfully";
    }
}

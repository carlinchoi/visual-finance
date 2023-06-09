package carlinchoi.visualfinance.dao;

// Java Program to Illustrate Creation Of
// Service Interface

//package com.SpringBootEmail.service;

// Importing required classes
//import com.SpringBootEmail.Entity.EmailDetails;

import carlinchoi.visualfinance.Entity.EmailDetails;

// Interface
public interface EmailService {

    // Method
    // To send a simple email
    String sendSimpleMail(EmailDetails details);

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details);
}

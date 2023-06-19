package carlinchoi.visualfinance.Entity;

// Java Program to Illustrate EmailDetails Class

//package com.SpringBootEmail.Entity;

// Importing required classes
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//username: rockvilleanimalshelter@gmail.com
//password: p@ssword123!
// Annotations
@Data
@AllArgsConstructor
@NoArgsConstructor

// Class
public class EmailDetails {

    // Class data members
    private String recipient;
    private String msgBody;
    private String subject;
    private String attachment;
}
package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class User {

   private int id;
   private String username;
   @JsonIgnore
   private String password;
   @JsonIgnore
   private boolean activated;
   private Set<Authority> authorities = new HashSet<>();
   @JsonProperty("role")
   private String role;
   @JsonProperty("email")
   private String email;
   @JsonProperty("firstName")
   @JsonAlias("first_name")
   private String firstName;
   @JsonProperty("lastName")
   @JsonAlias("last_name")
   private String lastName;

   public User() { }


   public User(int id, String username, String password, boolean activated, Set<Authority> authorities, String role, String email, String firstName, String lastName) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.activated = activated;
      this.authorities = authorities;
      this.role = role;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
   }

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public String getUsername() {
      return username;
   }

   public void setUsername(String username) {
      this.username = username;
   }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }

   public boolean isActivated() {
      return activated;
   }

   public void setActivated(boolean activated) {
      this.activated = activated;
   }

   public Set<Authority> getAuthorities() {
      return authorities;
   }

   public void setAuthorities(Set<Authority> authorities) {
      this.authorities = authorities;
   }

   public String getRole() {
      return role;
   }

   public void setRole(String role) {
      this.role = role;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public String getFirstName() {
      return firstName;
   }

   public void setFirstName(String firstName) {
      this.firstName = firstName;
   }

   public String getLastName() {
      return lastName;
   }

   public void setLastName(String lastName) {
      this.lastName = lastName;
   }







   public void setAuthorities(String authorities) {
      String[] roles = authorities.split(",");
      for(String role : roles) {
         String authority = role.contains("ROLE_") ? role : "ROLE_" + role;
         this.authorities.add(new Authority(authority));
      }
   }

   @Override
   public String toString() {
      return "User{" +
              "id=" + id +
              ", username='" + username + '\'' +
              ", password='" + password + '\'' +
              ", activated=" + activated +
              ", authorities=" + authorities +
              ", role='" + role + '\'' +
              ", email='" + email + '\'' +
              ", firstName='" + firstName + '\'' +
              ", lastName='" + lastName + '\'' +

              '}';
   }

   @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;
      User user = (User) o;
      return id == user.id && activated == user.activated && Objects.equals(username, user.username) && Objects.equals(password, user.password) && Objects.equals(authorities, user.authorities) && Objects.equals(role, user.role) && Objects.equals(email, user.email) && Objects.equals(firstName, user.firstName) && Objects.equals(lastName, user.lastName);
   }

   @Override
   public int hashCode() {
      return Objects.hash(id, username, password, activated, authorities, role, email, firstName, lastName);
   }
}

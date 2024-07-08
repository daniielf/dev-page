package com.danieldev.landingpage.models.tech;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tech")
public class Tech {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  String title;

  public Tech() {

  }

  public Tech(String title) {
    super();
    this.title = title;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }
}

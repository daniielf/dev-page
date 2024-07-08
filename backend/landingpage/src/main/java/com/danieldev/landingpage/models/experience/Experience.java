package com.danieldev.landingpage.models.experience;

import java.util.List;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Experience {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  String title;
  String subtitle;
  List<String> descriptionTopics;
  @Nullable
  String backgroundColor;
  @Nullable
  String fontColor;
  List<String> mainTechs;
  List<Integer> workingYears;

  public Experience() {

  }

  public Experience(String title, String subtitle, List<String> descriptionTopics, String backgroundColor,
      String fontColor, List<String> mainTechs, List<Integer> workingYears) {
    super();
    this.title = title;
    this.subtitle = subtitle;
    this.descriptionTopics = descriptionTopics;
    this.backgroundColor = backgroundColor;
    this.fontColor = fontColor;
    this.mainTechs = mainTechs;
    this.workingYears = workingYears;
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

  public String getSubtitle() {
    return subtitle;
  }

  public void setSubtitle(String subtitle) {
    this.subtitle = subtitle;
  }

  public List<String> getDescriptionTopics() {
    return descriptionTopics;
  }

  public void setDescriptionTopics(List<String> descriptionTopics) {
    this.descriptionTopics = descriptionTopics;
  }

  public String getBackgroundColor() {
    return backgroundColor;
  }

  public void setBackgroundColor(String backgroundColor) {
    this.backgroundColor = backgroundColor;
  }

  public String getFontColor() {
    return fontColor;
  }

  public void setFontColor(String fontColor) {
    this.fontColor = fontColor;
  }

  public List<String> getMainTechs() {
    return mainTechs;
  }

  public void setMainTechs(List<String> mainTechs) {
    this.mainTechs = mainTechs;
  }

  public List<Integer> getWorkingYears() {
    return workingYears;
  }

  public void setWorkingYears(List<Integer> workingYears) {
    this.workingYears = workingYears;
  }
}
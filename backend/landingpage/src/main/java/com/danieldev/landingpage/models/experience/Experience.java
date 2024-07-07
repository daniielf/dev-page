package com.danieldev.landingpage.models.experience;

import java.util.List;
import java.util.UUID;

import lombok.Builder;

@Builder
public record Experience(
        UUID id,
        String title,
        String subtitle,
        List<String> descriptionTopics,
        String backgroundColor,
        String fontColor,
        List<String> mainTechs,
        List<Integer> workingYears) {

}

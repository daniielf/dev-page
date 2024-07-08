package com.danieldev.landingpage.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.danieldev.landingpage.models.tech.Tech;

public interface TechRepository extends JpaRepository<Tech, Integer> {

}

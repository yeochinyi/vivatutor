package com.vivakids.tutor.cucumber.stepdefs;

import com.vivakids.tutor.VivatutorApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = VivatutorApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}

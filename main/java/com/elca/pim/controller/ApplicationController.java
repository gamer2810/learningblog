package com.elca.pim.controller;

import com.elca.pim.dom.Project;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.fasterxml.jackson.databind.util.JSONWrappedObject;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ApplicationController {

    private List<Project> holder;

    public ApplicationController(){
        String[] PrjName = {
                "LAGAPEO"
                ,"LARGEMEME"
                ,"NormalMeme"
                ,"lowcasememe"
                ,"ZHQUEST"
                ,"SECUTIX"
                ,"KSTA"};
        holder = new ArrayList<>();
        for(int i = 3000; i < 3007;i++){
            holder.add(new Project(i,PrjName[i-3000],"ELCA"));
        }
    }

    @RequestMapping("/")
    public ModelAndView main(){
        Map<String, Object> model = new HashMap<String, Object>() {
            private static final long serialVersionUID = -6883088231537577238L;
            {
                put("projects", holder);
            }
        };

        return new ModelAndView("project-list",model);
    }

    @RequestMapping(value = "/new",method = RequestMethod.GET)
    public String rendernewProject(){
        return "project-new";
    }

    @RequestMapping(value="/new",method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity createnewProject(HttpServletResponse response){
        return new ResponseEntity(HttpStatus.NOT_IMPLEMENTED);
    }

    @RequestMapping(value = "/edit",method = RequestMethod.GET)
    public String rendereditProject(){
        return "project-new";
    }

    @RequestMapping(value="/getproject/{number}",method=RequestMethod.GET,produces = "application/json")
    @ResponseBody
    Project loadProject(@PathVariable("number") Long number){
        int index= number.intValue()-3000;
        return  holder.get(index);
    }
}

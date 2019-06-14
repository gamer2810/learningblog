package com.elca.pim.dom;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

public class Project {
    private long ID;

    private long number;

    private String name;

    private String customer;

    private String status;

    private Date startDate;

    public Project(long number,String name, String customer){
        this.number = number;
        this.name = name;
        this.customer = customer;
        if(number % 2 == 0){
            this.status="NEW";
        }
        else this.status="In Progress";
        this.startDate = Date.from(Instant.now());
    }

    public long getNumber() {
        return number;
    }

    public String getName() {
        return name;
    }

    public String getCustomer() {
        return customer;
    }

    public String getStatus() {
        return status;
    }

    public String getStartDate() {
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/YYYY");
        return dateFormat.format(startDate);
    }
}

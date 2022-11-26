package com.morenoajdev;
import static spark.Spark.*;


public class hello {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");
        post("/hello", (req, res) -> "Hello from post");
    }
}

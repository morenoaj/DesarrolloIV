package com.morenoajdev;
import static spark.Spark.*;
import org.json.JSONObject;
import spark.Route;



public class Enclase {
    public static void main( String[] args )
    {
        Pyramids pyrams = new Pyramids();
        // pyrams.setProblem(" 1 2 3 4 5 6 7 8 9 10");
        // pyrams.setSolucion("1 2 3 4 5");
        get("/pyramid",(req,res)->{
            res.type("application/json");
            JSONObject response = new JSONObject(pyrams);
            return response;
        });
        get("/pyramid/: index",(req,res)->{
            res.type("application/json");
            JSONObject response = new JSONObject(pyrams.getPyramids().get(Integer.parseInt(req.params(":index"))));
            return response;
        });
        post("/pyramid", (req,res)->{
            res.type("application/json");
            JSONObject request = new JSONObject(req.body());
            pyrams.addpyramid(
                request.getString("problem"),
                request.getString("solution")
            );  
            JSONObject response = new JSONObject(pyrams);
            return response;          
        });
    }

    private static void post(String path, Route route) {
    }
}

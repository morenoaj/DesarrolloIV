package com.morenoajdev;
import java.util.List;
import java.util.ArrayList;

public class Pyramids {
    List<Pyramid> Pyramids = new ArrayList<Pyramid>();
    

    public List <Pyramid> getPyramids(){
        return Pyramids;
    }
    public void addpyramid(String problem, String solution){
        Pyramid pyram = new Pyramid();
        pyram.problem= problem;
        pyram.solution= solution;
        Pyramids.add(pyram);
    }
    public Integer getCount(){
        return Pyramids.size();
    }
}

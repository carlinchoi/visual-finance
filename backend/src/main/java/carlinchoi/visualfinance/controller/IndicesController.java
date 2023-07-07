package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.Indices;
import carlinchoi.visualfinance.service.IndicesAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class IndicesController {
    private final IndicesAPIService indicesAPIService;

    @Autowired
    public IndicesController(IndicesAPIService indicesAPIService) {
        this.indicesAPIService = indicesAPIService;
    }

    @GetMapping("/indices")
    public ResponseEntity<Indices> getIndicesData(@RequestParam String symbol, @RequestParam String date) {
        Indices indicesData = indicesAPIService.getIndicesData(symbol, date);
        return ResponseEntity.ok(indicesData);
    }

}

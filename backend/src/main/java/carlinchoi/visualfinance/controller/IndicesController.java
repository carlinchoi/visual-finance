package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.Indices;
import carlinchoi.visualfinance.service.IndicesAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path="")
@CrossOrigin
public class IndicesController {
    private final IndicesAPIService indicesAPIService;

    @Autowired
    public IndicesController(IndicesAPIService indicesAPIService) {
        this.indicesAPIService = indicesAPIService;
    }

    @PreAuthorize("permitAll")
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(path = "/indices", method = RequestMethod.GET)
    public ResponseEntity<Indices> getIndicesData(@RequestParam("symbol") String symbol) {
        Indices indicesData = indicesAPIService.getIndicesData(symbol);
        return ResponseEntity.ok(indicesData);
    }
}

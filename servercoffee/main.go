package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

// Define Coffee struct
type Coffee struct {
	Id         string  `json:"id"`
	CoffeeName string  `json:"coffee_name"`
	Category   string  `json:"category"`
	SugarLevel string  `json:"sugar_level"`
	Price      float32 `json:"price"`
}

// Handler to read all coffees
func readAllCoffees(c *gin.Context) {
	coffees := []Coffee{
		{Id: "1", CoffeeName: "Instant", Category: "Large", SugarLevel: "Normal", Price: 150},
		{Id: "2", CoffeeName: "Filter", Category: "Normal", SugarLevel: "Less", Price: 100},
	}
	c.JSON(http.StatusOK, coffees)
}

// Handler to read a coffee by ID
func readCoffeeById(c *gin.Context) {
	id := c.Param("id")
	coffee := Coffee{Id: id, CoffeeName: "Instant", Category: "Large", SugarLevel: "Normal", Price: 150}
	c.JSON(http.StatusOK, coffee)
}

// Handler to create a new coffee
func createCoffee(c *gin.Context) {
	var newCoffee Coffee
	if err := c.BindJSON(&newCoffee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Coffee Created Successfully", "coffee": newCoffee})
}

// Handler to update a coffee
func updateCoffee(c *gin.Context) {
	id := c.Param("id")
	var updatedCoffee Coffee
	if err := c.BindJSON(&updatedCoffee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	updatedCoffee.Id = id
	c.JSON(http.StatusOK, gin.H{"message": "Updated Coffee Successfully", "coffee": updatedCoffee})
}

// Handler to delete a coffee
func deleteCoffee(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "Coffee deleted Successfully", "id": id})
}

func main() {
	r := gin.Default()

	// API Endpoints
	r.GET("/coffees", readAllCoffees)
	r.GET("/coffees/:id", readCoffeeById)
	r.POST("/coffees", createCoffee)
	r.PUT("/coffees/:id", updateCoffee)
	r.DELETE("/coffees/:id", deleteCoffee)

	// Start the server
	r.Run(":8080")
}
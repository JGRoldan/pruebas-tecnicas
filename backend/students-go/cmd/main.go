package main

import (
	"students-go/config"
	"students-go/routes"

	"github.com/gin-gonic/gin"
)

func main() {
    config.ConnectDatabase()
    router := gin.Default()
    routes.RegisterRoutes(router)
    router.Run(":8080")
}

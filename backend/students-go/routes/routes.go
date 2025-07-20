package routes

import (
	controllers "students-go/controller"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
    r.GET("/students", controllers.GetAllStudents)
    //POST, PUT, DELETE...
}

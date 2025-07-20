package controllers

import (
	"net/http"
	"students-go/repositories"

	"github.com/gin-gonic/gin"
)

func GetAllStudents(c *gin.Context) {
    students, err := repositories.GetAllStudents()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    c.JSON(http.StatusOK, students)
}

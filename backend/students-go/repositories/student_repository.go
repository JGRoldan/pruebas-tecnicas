package repositories

import (
	"log"
	"students-go/config"
	"students-go/models"
)

func GetAllStudents() ([]models.Student, error) {
    var students []models.Student
    result := config.DB.Find(&students)
    if result.Error != nil {
        log.Println("Error en consulta:", result.Error)
    }
    return students, result.Error
}
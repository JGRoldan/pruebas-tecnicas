package models

type Student struct {
	ID       uint   `gorm:"primaryKey;column:id_est" json:"id_est"`
	Nombre   string `gorm:"column:nombre" json:"nombre"`
	Apellido string `gorm:"column:apellido" json:"apellido"`
	Email    string `gorm:"column:email" json:"email"`
}

func (Student) TableName() string {
	return "estudiante"
}
package main
import(
	"fmt"//format module by which we can print the output
)
type Car struct {
	id int
	Number string
	Model string
	Type string
}

func main(){
	//car1 :=Car {id:10, Number:"KA47S8350", Model:"Ambassedor", Type:"Sedan"}
	var car1 Car =Car {id:10, Number:"KA47S8350", Model:"Ambassedor", Type:"Sedan"}
	
	fmt.Println(car1)
	fmt.Println(car1.Type)

	var cars[] Car =[]Car{
		{id:10, Number:"KA47S8350", Model:"Ambassedor", Type:"Sedan"},
		{id:120, Number:"KA09S8550", Model:"TATA", Type:"SUV"},
		{id:10, Number:"KA47S8350", Model:"Ambassedor", Type:"Sedan"},
		{id:10, Number:"KA47S8350", Model:"Ambassedor", Type:"Sedan"},

	} 
	fmt.Println(cars)

	var car2* Car=&car1
	fmt.Println(car2.Model)
	// fmt.Println("Hello World!!");
	// //var first int = 10
	// //var second int = 20
	// //var sum int = first + second
	// first := 10
	// second := 20
	// sum := first + second
	
	// //var salaries[] float32= [] float32 {1.0,2.0}
	// salaries := [] float32 {1.0,2.0}
	// fmt.Println(sum)
	// fmt.Println(salaries)


}
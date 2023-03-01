const employees = [
		  { name: 'David Carlson', 
			 age: 30 
		   },
		  { name: 'John Cena', 
			 age: 34 
			},
		  { name: 'Mike Sheridan', 
			 age: 25 
		   },
		  { name: 'John Carte', 
			age: 50 
		   }
		];

		const john = employees.find(function(element){
			 return element.age > 30;
			});	
			
		const johnIndex = employees.findIndex(function(element){
			 return element.age > 30;
			});	
		console.log(john,`Index => ${johnIndex}`);
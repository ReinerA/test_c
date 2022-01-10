// add items to the "Add Items" tab

// Item names and categories
// 1) Sofa: type = 1, category = 1
// 2) Chair: type = 1, category = 2
// 3) Table: type = 1, category = 3
// 4) Bed: type = 1, category = 4
// 5) Closet: type = 1, category = 5
// 6) Bedside Table: type = 1, category = 6
// 7) Lamp: type = 1 or 11, category = 7
// 8) Rug: type = 8, category = 8
// 9) Door: type = 7, category = 9
// 10) Window: type = 3, category = 10
// 11) Curtain: type = 2, category = 11
// 12) Poster: type = 2, category = 12
// 13) Cabin: type = 1, category = 13


var items = {
	"1":{ 
		"type":"object","object":{"name": "Дверь",
			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
			"model" : "models/js/closed-door28x80_baked.js",
			"type" : "7",
			"category":"9",
			"categoryName":"Door"
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
	
			"Standard" : {
				"Name": "Alto",
				"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
				"Description": "Серия дверей, спроектированных специально для оборудования дверных проемов на объектах коммерческой и жилой недвижимости, не имеющих специальных требований по звукоизоляции и пожарной безопасности.",
				"Price": "4500р",
				"Link":"https://msk.velldoris.net/catalog/mezhkomnatnye-dveri/_7_21_lr_2014_2_/"
			},


			"Premium" : 
			{
				"Name": "Softtouch",
				"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
				"Description": "Изящная классика в удивительном многообразии форм и отделок, особая элегантность и высокий стиль вашего дома - все это объединяет в себе гармоничная и необыкновенно вариативная серия дверей ALTO",
				"Price": "9370р",
				"Link":"https://msk.velldoris.net/catalog/mezhkomnatnye-dveri/_600_2000_lr__126/"
			}

		}
	}, 
	"2":{
		"type":"object","object":{"name": "Open Door",
			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
			"model" : "models/js/open_door.js",
			"type" : "7",
			"category":"9",
			"categoryName":"Door",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"3":{
		"type":"object","object":{"name": "Window",
			"image" : "models/thumbnails/thumbnail_window.png",
			"model" : "models/js/whitewindow.js",
			"type" : "3",
			"category":"10",
			"categoryName":"Window",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_window.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_window.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_window.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"4":{
		"type":"object","object":{"name": "Chair",
			"image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
			"model" : "models/js/gus-churchchair-whiteoak.js",
			"type" : "1",
			"category":"2",
			"categoryName":"Chair",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"5":{
		"type":"object","object":{"name": "Red Chair",
			"image" : "models/thumbnails/thumbnail_tn-orange.png",
			"model" : "models/js/ik-ekero-orange_baked.js",
			"type" : "1",
			"category":"2",
			"categoryName":"Chair",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_tn-orange.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_tn-orange.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_tn-orange.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	"6":{
		"type":"object","object":{"name": "Blue Chair",
			"image" : "models/thumbnails/thumbnail_ekero-blue3.png",
			"model" : "models/js/ik-ekero-blue_baked.js",
			"type" : "1",
			"category":"2",
			"categoryName":"Chair",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_ekero-blue3.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_ekero-blue3.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_ekero-blue3.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	"7":{
		"type":"object","object":{"name": "Dresser - Dark Wood",
			"image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
			"model" : "models/js/DWR_MATERA_DRESSER2.js",
			"type" : "1",
			"category":"5",
			"categoryName":"Closet",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"8":{
		"type":"object","object":{"name": "Dresser - White",
			"image" : "models/thumbnails/thumbnail_img25o.jpg",
			"model" : "models/js/we-narrow6white_baked.js",
			"type" : "1",
			"category":"5",
			"categoryName":"Closet",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_img25o.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_img25o.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_img25o.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
      
	},  
	"9":{
		"type":"object","object":{"name": "Bedside table - Shale",
			"image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
			"model" : "models/js/bd-shalebedside-smoke_baked.js",
			"type" : "1",
			"category":"6",
			"categoryName":"Bedside table",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"10":{
		"type":"object","object":{"name": "Bedside table - White",
			"image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
			"model" : "models/js/cb-archnight-white_baked.js",
			"type" : "1",
			"category":"6",
			"categoryName":"Bedside table",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	// "11":{
	// 	"type":"object","object":{"name": "Wardrobe - White",
	// 		"image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
	// 		"model" : "models/js/ik-kivine_baked.js",
	// 		"type" : "1",
	// 		"category":"2",
	// 		"categoryName":"Dresser",
	// 	}, "RealObject" :{
	// 		"image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
	// 		"Standard" : {
	// 			"Name": "Хельмер",
	// 			"image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
	// 			"Description": "Тумба с ящиками на колесах",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
	// 		},


	// 		"Premium" : 
	// 		{
	// 			"Name": "Алекс",
	// 			"image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
	// 			"Description": "Тумба черно-коричневая",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
	// 		}

	// 	}
	// }, 
	"12":{
		"type":"object","object":{"name": "Full Bed",
			"image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
			"model" : "models/js/ik_nordli_full.js",
			"type" : "1",
			"category":"4",
			"categoryName":"Bed",}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"13":{
		"type":"object","object":{"name": "Bookshelf",
			"image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
			"model" : "models/js/cb-kendallbookcasewalnut_baked.js",
			"type" : "1",
			"category":"5",
			"categoryName":"Closet",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"14":{
		"type":"object","object":{"name": "Media Console - White",
			"image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
			"model" : "models/js/cb-clapboard_baked.js",
			"type" : "1",
			"category":"13",
			"categoryName":"Cabin",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	// "15":{
	// 	"type":"object","object":{"name": "Media Console - Black",
	// 		"image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
	// 		"model" : "models/js/cb-moore_baked.js",
	// 		"type" : "1",
	// 		"category":"2",
	// 		"categoryName":"Dresser",
	// 	}, "RealObject" :{
	// 		"image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
	// 		"Standard" : {
	// 			"Name": "Хельмер",
	// 			"image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
	// 			"Description": "Тумба с ящиками на колесах",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
	// 		},


	// 		"Premium" : 
	// 		{
	// 			"Name": "Алекс",
	// 			"image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
	// 			"Description": "Тумба черно-коричневая",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
	// 		}

	// 	}
	// }, 
	// "16":{
	// 	"type":"object","object":{"name": "Sectional - Olive",
	// 		"image" : "models/thumbnails/thumbnail_img21o.jpg",
	// 		"model" : "models/js/we-crosby2piece-greenbaked.js",
	// 		"type" : "1",
	// 		"category":"2",
	// 		"categoryName":"Dresser",
	// 	}, "RealObject" :{
	// 		"image" : "models/thumbnails/thumbnail_img21o.jpg",
	// 		"Standard" : {
	// 			"Name": "Хельмер",
	// 			"image" : "models/thumbnails/thumbnail_img21o.jpg",
	// 			"Description": "Тумба с ящиками на колесах",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
	// 		},


	// 		"Premium" : 
	// 		{
	// 			"Name": "Алекс",
	// 			"image" : "models/thumbnails/thumbnail_img21o.jpg",
	// 			"Description": "Тумба черно-коричневая",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
	// 		}

	// 	}
	// }, 
	"17":{
		"type":"object","object":{"name": "Sofa - Grey",
			"image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
			"model" : "models/js/cb-rochelle-gray_baked.js",
			"type" : "1",
			"category":"1",
			"categoryName":"Sofa",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"18":{
		"type":"object","object":{"name": "Wooden Trunk",
			"image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
			"model" : "models/js/cb-tecs_baked.js",
			"type" : "1",
			"category":"5",
			"categoryName":"Closet",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"19": {
		"type":"object","object":{"name": "Floor Lamp",
			"image" : "models/thumbnails/thumbnail_ore-white.png",
			"model" : "models/js/ore-3legged-white_baked.js",
			"type" : "1",
			"category":"7",
			"categoryName":"Lamp",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_ore-white.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_ore-white.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_ore-white.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	"20":{
		"type":"object","object":{"name": "Coffee Table - Wood",
			"image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
			"model" : "models/js/ik-stockholmcoffee-brown.js",
			"type" : "1",
			"category":"3",
			"categoryName":"Table",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"21":{
		"type":"object","object":{"name": "Side Table",
			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
			"model" : "models/js/GUSossingtonendtable.js",
			"type" : "1",
			"category":"3",
			"categoryName":"Table",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	"22":{
		"type":"object","object":{"name": "Dining Table",
			"image" : "models/thumbnails/thumbnail_scholar-dining-table.jpg",
			"model" : "models/js/cb-scholartable_baked.js",
			"type" : "1",
			"category":"3",
			"categoryName":"Table",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_scholar-dining-table.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_scholar-dining-table.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_scholar-dining-table.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}, 
	// "23":{
	// 	"type":"object","object":{"name": "Dining table",
	// 		"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
	// 		"model" : "models/js/BlakeAvenuejoshuatreecheftable.js",
	// 		"type" : "1",
	// 		"category":"2",
	// 		"categoryName":"Dresser",
	// 	}, "RealObject" :{
	// 		"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
	// 		"Standard" : {
	// 			"Name": "Хельмер",
	// 			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
	// 			"Description": "Тумба с ящиками на колесах",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
	// 		},


	// 		"Premium" : 
	// 		{
	// 			"Name": "Алекс",
	// 			"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
	// 			"Description": "Тумба черно-коричневая",
	// 			"Price": "5900р",
	// 			"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
	// 		}

	// 	}
	// },
	"24":{
		"type":"object","object":{"name": "Blue Rug",
			"image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
			"model" : "models/js/cb-blue-block-60x96.js",
			"type" : "8",
			"category":"8",
			"categoryName":"Rug",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	"25":{
		"type":"object","object":{"name": "NYC Poster",
			"image" : "models/thumbnails/thumbnail_nyc2.jpg",
			"model" : "models/js/nyc-poster2.js",
			"type" : "2",
			"category":"12",
			"categoryName":"Poster",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_nyc2.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_nyc2.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_nyc2.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	"26":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/marbletiles.jpg",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_marbletiles.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_marbletiles.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_marbletiles.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_marbletiles.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	"27":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/wallmap_yellow.png",
			"stretch":"true",
			"scale":"",
			"icon":"rooms/thumbnails/thumbnail_wallmap_yellow.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_wallmap_yellow.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_wallmap_yellow.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_wallmap_yellow.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	"28":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/light_brick.jpg",
			"stretch":"false",
			"scale":"100",
			"icon":"rooms/thumbnails/thumbnail_light_brick.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_light_brick.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_light_brick.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_light_brick.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	
	"29":{
		"type":"floorTexture","Texture":{
			"name": "",
			"url": "rooms/textures/light_fine_wood.jpg",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_light_fine_wood.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_light_fine_wood.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_light_fine_wood.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_light_fine_wood.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	
	"30":{
		"type":"object","object":{"name": "Chandelier",
			"image" : "models/thumbnails/thumbnail_ore-white.png",
			"model" : "models/js/ore-3legged-white_baked.js",
			"type" : "11",
			"category":"7",
			"categoryName":"Lamp",
		}, "RealObject" :{
			"image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},


			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	
	"31":{
		"type":"roofTexture","Texture":{
			"name": "",
			"url": "rooms/textures/light-grey_roof.png",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_light-grey_roof.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_light-grey_roof.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_light-grey_roof.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_light-grey_roof.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"32":{
		"type":"roofTexture","Texture":{
			"name": "",
			"url": "rooms/textures/walllightmap.png",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_walllightmap.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_walllightmap.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_walllightmap.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_walllightmap.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"33":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/wallmap_blue.png",
			"stretch":"true",
			"scale":"",
			"icon":"rooms/thumbnails/thumbnail_wallmap_blue.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_wallmap_blue.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_wallmap_blue.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_wallmap_blue.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},
	
	"34":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/wallmap_grey.png",
			"stretch":"true",
			"scale":"",
			"icon":"rooms/thumbnails/thumbnail_wallmap_grey.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_wallmap_grey.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_wallmap_grey.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_wallmap_grey.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"35":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/wallmap_green.png",
			"stretch":"true",
			"scale":"",
			"icon":"rooms/thumbnails/thumbnail_wallmap_green.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_wallmap_green.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_wallmap_green.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_wallmap_green.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"36":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/light_wood.png",
			"stretch":"true",
			"scale":"",
			"icon":"rooms/thumbnails/thumbnail_light_wood.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_light_wood.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_light_wood.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_light_wood.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"37":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/dark_wood.png",
			"stretch":"true",
			"scale":"",
			"icon":"rooms/thumbnails/thumbnail_dark_wood.png"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_dark_wood.png",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_dark_wood.png",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_dark_wood.png",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"38":{
		"type":"floorTexture","Texture":{
			"name": "",
			"url": "rooms/textures/dark_fine_wood.jpg",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_dark_fine_wood.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_dark_fine_wood.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_dark_fine_wood.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_dark_fine_wood.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"39":{
		"type":"floorTexture","Texture":{
			"name": "",
			"url": "rooms/textures/bright_tile.jpg",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_bright_tile.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_bright_tile.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_bright_tile.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_bright_tile.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"40":{
		"type":"floorTexture","Texture":{
			"name": "",
			"url": "rooms/textures/floor_tile.jpg",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_floor_tile.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_floor_tile.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_floor_tile.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_floor_tile.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"41":{
		"type":"floorTexture","Texture":{
			"name": "",
			"url": "rooms/textures/floor_marble_tile.jpg",
			"stretch":"false",
			"scale":"300",
			"icon":"rooms/thumbnails/thumbnail_floor_marble_tile.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_floor_marble_tile.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_floor_marble_tile.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_floor_marble_tile.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	},

	"42":{
		"type":"wallTexture","Texture":{
			"name": "",
			"url": "rooms/textures/white_brick.jpg",
			"stretch":"false",
			"scale":"100",
			"icon":"rooms/thumbnails/thumbnail_white_brick.jpg"
		}, "RealObject" :{
			"image" : "rooms/thumbnails/thumbnail_white_brick.jpg",
			"Standard" : {
				"Name": "Хельмер",
				"image" : "rooms/thumbnails/thumbnail_white_brick.jpg",
				"Description": "Тумба с ящиками на колесах",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/helmer-tumba-s-yashchikami-na-kolesah-belyy-50384944/"
			},
			"Premium" : 
			{
				"Name": "Алекс",
				"image" : "rooms/thumbnails/thumbnail_white_brick.jpg",
				"Description": "Тумба черно-коричневая",
				"Price": "5900р",
				"Link":"https://www.ikea.com/ru/ru/p/aleks-tumba-s-yashchikami-belyy-50384901"
			}

		}
	}




   
}


var items_object = {};
var items_wallTexture  = {};
var items_floorTexture  = {};
var items_roofTexture  = {};
		
	    
for (var key in items)
{
	let item = items[key];	
		item.id = key;	
	switch(item.type) {
		case "object": 
		items_object[key] = item;
		break;
		case "wallTexture": 
		items_wallTexture[key] = item;
		break;
		case "floorTexture": 
		items_floorTexture[key] = item;
		break;
		case "roofTexture": 
		items_roofTexture[key] = item;
		break;
	}
}
var categorys = {};
  
for (var key in items_object)
{
	var item = items_object[key];	
	if (!categorys[item.object.category])categorys[item.object.category] = [];   	
	categorys[item.object.category].push(item);	
}
  

$(document).ready(function(){
	
		
		var additems =  $("#add-items");

		var categorysDiv = $("#categorys-wrapper");

		for (var key in categorys) 
		{
			let item =	categorys[key][0];

			let html = `<div class="col-xs-6 col-sm-4"> <a class="thumbnail" category="${item.object.category}" ><img src="${item.object.image}">${item.object.categoryName}</img> </a></div>`;
			categorysDiv.append(html);
		}


		var items_objectDiv = $("#items-wrapper");
		for (var id in items_object){
			var item = items_object[id];
			
			var html = '<div class="col-xs-6 col-sm-4 item" category="'+item.object.category+'">' +
			'<a class="thumbnail add-item" model-id="' +  
			item.id + 
			'" model-name="' +
			item.object.name +
			'" model-url="' +
			item.object.model +
			'" category="' +
			item.object.category +
			'" model-type="' +
			item.object.type + 
			'"><img src="' +
			item.object.image + 
			'" alt="Add Item"> '+
			item.object.name +
			'</a></div>';
			items_objectDiv.append(html);
		}
		
		
		var items_wallTextureBody = $(".wallTextures .panel-body");
		
		for (var id in items_wallTexture){
			let item = items_wallTexture[id];
			let html = `<div class="col-sm-6 item">
			<a href="#" class="thumbnail  texture-select" texture-url="${item.Texture.url}" texture-stretch="${item.Texture.stretch}" texture-scale="${item.Texture.scale}" item-id="${item.id}" >
			<img alt="Thumbnail light fine wood" src="${item.Texture.icon}" />
			</a>
			</div>`;   
			    
			items_wallTextureBody.append(html);	
		}
		
		var items_floorTextureBody = $(".floorTexturesDiv .panel-body");
		
		for (var id in items_floorTexture){
			let item = items_floorTexture[id];
			let html = `<div class="col-sm-6 item">
			<a href="#" class="thumbnail texture-select" texture-url="${item.Texture.url}" texture-stretch="${item.Texture.stretch}" texture-scale="${item.Texture.scale}" item-id="${item.id}" >
			<img alt="Thumbnail light fine wood" src="${item.Texture.icon}" />
			</a>
			</div>`;   
			    
			items_floorTextureBody.append(html);	
		}
		
		var items_roofTextureBody = $(".roofTextures .panel-body");
		
		for (var id in items_roofTexture){
			let item = items_roofTexture[id];
			let html = `<div class="col-sm-6 item">
			<a href="#" class="thumbnail texture-select" texture-url="${item.Texture.url}" texture-stretch="${item.Texture.stretch}" texture-scale="${item.Texture.scale}" item-id="${item.id}" >
			<img alt="Thumbnail light fine wood" src="${item.Texture.icon}" />
			</a>
			</div>`;   
			    
			items_roofTextureBody.append(html);	
		}
		
		
	});
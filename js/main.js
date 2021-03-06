/*
 * Vue Slider
 */

const root = new Vue({
	el:'.carousel',
	
	data:{
	
		slides: [
			{
				 image: 'img/01.jpg',
				 title: 'Svezia',
				 text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
			},
			{
				 image: 'img/02.jpg',
				 title: 'Svizzera',
				 text: 'Lorem ipsum.',
			},
			{
				 image: 'img/03.jpg',
				 title: 'Gran Bretagna',
				 text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
			},
			{
				 image: 'img/04.jpg',
				 title: 'Germania',
				 text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
			},
			{
				 image: 'img/05.jpg',
				 title:
					  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
			},
	  ],

	  activeImg: 1,
	  
	 
	},

	created(){
		setInterval(() => {
			this.nextClick();
		}, 3000);
	},
	methods:{
		prevClick(){
			this.activeImg--
			if(this.activeImg < 0){
				this.activeImg = this.slides.length - 1
			}
		},
		nextClick(){
			this.activeImg++
			if(this.activeImg > this.slides.length - 1){
				this.activeImg = 0
			}
		},
		overClick(index){
			this.activeImg = index
		},
	
	}
	
	
})

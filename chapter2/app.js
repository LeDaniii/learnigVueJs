const app = Vue.createApp({
    // data, functions
    // template: '<h2>i am the template</h2>'
    data() {
        return {
            url:'http://www.thenetninja.co.uk',
            showBooks: false,
            title: 'the title of whats up ma duuude',
            author: 'Jesus itself',
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: '../assets/img1.JPG'
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: '../assets/img1.jpg'
                },
                {
                    title: 'the final empire',
                    author: 'brandon sanderson',
                    img: '../assets/img3.jpg'
                }
            ],
            age: 25,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
                this.showBooks = !this.showBooks
        },
        changeTitle(title) {
            // this.title = 'Words doesnt matter'
            this.title = title
        },
        handleEvent(e, data) {
            console.log(e, e.type, data)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            console.log("Y-Axis: ", this.y, " ", "X-Axis: ", this.x)
            // console.log("x: ", x, "/br", "y: ", y)
        }
    }
})

app.mount('#app')
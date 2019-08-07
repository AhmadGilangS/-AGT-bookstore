import{
    Bar
}

from 'vue-chartjs'
export default{
    extends: Bar,
    props: ['data'],
    data(){
        return{
            options: {
                title: {
                    display: true,
                    text: 'Done with vue-chartjs'
                }
            }
        }
    },
    ready(){
        this.render(this.data, this.options)
    }
}
export default {
  components: {
    ChartDemoCard: () => import('../components/ChartDemoCard.vue')
  },
  methods: {
    ready () {
      this.$nextTick(() => {
        this.$refs.chart.resize()
      })
    }
  }
}

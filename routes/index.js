const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    data: {
      content : [
        {
          category_name : '👀',
          items : [
            {
              title : 'hex时钟',
              description : '如果把当前时间作为RGB颜色...',
              background_url : '/res/index/img_thumbnail_display_hex_clock.jpg',
              url : '/display/hex_clock'
            },{
              title : '守望先锋战队Logo',
              description : '只是守望先锋职业联赛战队的Logo...',
              background_url : '/res/index/img_thumbnail_display_overwatch_league_logo.png',
              url : '/display/overwatch-league-logo'
            }
          ]
        }
      ]
    }
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    data: {
      content : [
        {
          category_name : '展示',
          items : [
            {
              title : 'hex时钟',
              description : 'hex',
              background_url : '/res/index/img_thumbnail_display_hex_clock.jpg'
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

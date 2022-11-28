/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa5d7a5c359a54fd2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c4c60885c05cb41a4a16b068dfff614b',

  PROVINCE: '广东',
  CITY: '广州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'BB',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKVAU5-ToL6RAessVGmAkljssn1g', // oKVAU53sVnrQfE2QN7S9UV0Dc9TI  oKVAU5-ToL6RAessVGmAkljssn1g
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dig3sX4xshBaI4v1TAWbkXNhxtMjktRt9UDedG4NZF4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '梅梅', year: '1999', date: '10-20',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-18' }
      ],
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'dig3sX4xshBaI4v1TAWbkXNhxtMjktRt9UDedG4NZF4', // JYLnukS-z3E82UEAj_1LrGmA7Li2OLWTp4bkoM_dpKc

  CALLBACK_USERS: [
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKVAU53sVnrQfE2QN7S9UV0Dc9TI', // oKVAU53sVnrQfE2QN7S9UV0Dc9TI  oKVAU5-ToL6RAessVGmAkljssn1g
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dig3sX4xshBaI4v1TAWbkXNhxtMjktRt9UDedG4NZF4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '梅梅', year: '1999', date: '10-20',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-18' }
      ],
    }
  ],

}

module.exports = USER_CONFIG


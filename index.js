const maps = [
  {
    CODE: '500101',
    NAME: '万州区',
    FULL_NAME: '万州区',
  },
  {
    CODE: '500102',
    NAME: '涪陵区',
    FULL_NAME: '涪陵区',
  },
  {
    CODE: '500103',
    NAME: '渝中区',
    FULL_NAME: '渝中区',
  },
  {
    CODE: '500104',
    NAME: '大渡口区',
    FULL_NAME: '大渡口区',
  },
  {
    CODE: '500105',
    NAME: '江北区',
    FULL_NAME: '江北区',
  },
  {
    CODE: '500106',
    NAME: '沙坪坝区',
    FULL_NAME: '沙坪坝区',
  },
  {
    CODE: '500107',
    NAME: '九龙坡区',
    FULL_NAME: '九龙坡区',
  },
  {
    CODE: '500108',
    NAME: '南岸区',
    FULL_NAME: '南岸区',
  },
  {
    CODE: '500109',
    NAME: '北碚区',
    FULL_NAME: '北碚区',
  },
  {
    CODE: '500110',
    NAME: '綦江区',
    FULL_NAME: '綦江区',
  },
  {
    CODE: '500111',
    NAME: '大足区',
    FULL_NAME: '大足区',
  },
  {
    CODE: '500112',
    NAME: '渝北区',
    FULL_NAME: '渝北区',
  },
  {
    CODE: '500113',
    NAME: '巴南区',
    FULL_NAME: '巴南区',
  },
  {
    CODE: '500114',
    NAME: '黔江区',
    FULL_NAME: '黔江区',
  },
  {
    CODE: '500115',
    NAME: '长寿区',
    FULL_NAME: '长寿区',
  },
  {
    CODE: '500116',
    NAME: '江津区',
    FULL_NAME: '江津区',
  },
  {
    CODE: '500117',
    NAME: '合川区',
    FULL_NAME: '合川区',
  },
  {
    CODE: '500118',
    NAME: '永川区',
    FULL_NAME: '永川区',
  },
  {
    CODE: '500119',
    NAME: '南川区',
    FULL_NAME: '南川区',
  },
  {
    CODE: '500120',
    NAME: '璧山区',
    FULL_NAME: '璧山区',
  },
  {
    CODE: '500142',
    NAME: '两江新区',
    FULL_NAME: '两江新区',
  },
  {
    CODE: '500143',
    NAME: '万盛经开区',
    FULL_NAME: '万盛经济技术开发区',
  },
  {
    CODE: '500144',
    NAME: '高新区',
    FULL_NAME: '重庆高新技术产业开发区',
  },
  {
    CODE: '500151',
    NAME: '铜梁区',
    FULL_NAME: '铜梁区',
  },
  {
    CODE: '500152',
    NAME: '潼南区',
    FULL_NAME: '潼南区',
  },
  {
    CODE: '500153',
    NAME: '荣昌区',
    FULL_NAME: '荣昌区',
  },
  {
    CODE: '500154',
    NAME: '开州区',
    FULL_NAME: '开州区',
  },
  {
    CODE: '500155',
    NAME: '梁平区',
    FULL_NAME: '梁平区',
  },
  {
    CODE: '500156',
    NAME: '武隆区',
    FULL_NAME: '武隆区',
  },
  {
    CODE: '500229',
    NAME: '城口县',
    FULL_NAME: '城口县',
  },
  {
    CODE: '500230',
    NAME: '丰都县',
    FULL_NAME: '丰都县',
  },
  {
    CODE: '500231',
    NAME: '垫江县',
    FULL_NAME: '垫江县',
  },
  {
    CODE: '500233',
    NAME: '忠县',
    FULL_NAME: '忠县',
  },
  {
    CODE: '500235',
    NAME: '云阳县',
    FULL_NAME: '云阳县',
  },
  {
    CODE: '500236',
    NAME: '奉节县',
    FULL_NAME: '奉节县',
  },
  {
    CODE: '500237',
    NAME: '巫山县',
    FULL_NAME: '巫山县',
  },
  {
    CODE: '500238',
    NAME: '巫溪县',
    FULL_NAME: '巫溪县',
  },
  {
    CODE: '500240',
    NAME: '石柱县',
    FULL_NAME: '石柱土家族自治县',
  },
  {
    CODE: '500241',
    NAME: '秀山县',
    FULL_NAME: '秀山土家族苗族自治县',
  },
  {
    CODE: '500242',
    NAME: '酉阳县',
    FULL_NAME: '酉阳土家族苗族自治县',
  },
  {
    CODE: '500243',
    NAME: '彭水县',
    FULL_NAME: '彭水苗族土家族自治县',
  },
  {
    CODE: '500000',
    NAME: '重庆市',
    FULL_NAME: '重庆市',
  },
  {
    CODE: '500227',
    NAME: '璧山区',
    FULL_NAME: '璧山区',
  },
  {
    CODE: '500224',
    NAME: '铜梁区',
    FULL_NAME: '铜梁区',
  },
  {
    CODE: '500223',
    NAME: '潼南区',
    FULL_NAME: '潼南区',
  },
  {
    CODE: '500226',
    NAME: '荣昌区',
    FULL_NAME: '荣昌区',
  },
  {
    CODE: '500234',
    NAME: '开州区',
    FULL_NAME: '开州区',
  },
  {
    CODE: '500228',
    NAME: '梁平区',
    FULL_NAME: '梁平区',
  },
  {
    CODE: '500232',
    NAME: '武隆区',
    FULL_NAME: '武隆区',
  },
  {
    CODE: '500383',
    NAME: '永川区',
    FULL_NAME: '永川区',
  },
  {
    CODE: '500900',
    NAME: '黔江区',
    FULL_NAME: '黔江区',
  },
  {
    CODE: '500382',
    NAME: '合川区',
    FULL_NAME: '合川区',
  },
  {
    CODE: '500222',
    NAME: '綦江区',
    FULL_NAME: '綦江区',
  },
  {
    CODE: '500384',
    NAME: '南川区',
    FULL_NAME: '南川区',
  },
  {
    CODE: '500905',
    NAME: '两江新区',
    FULL_NAME: '两江新区',
  },
  {
    CODE: '500225',
    NAME: '大足区',
    FULL_NAME: '大足区',
  },
  {
    CODE: '500221',
    NAME: '长寿区',
    FULL_NAME: '长寿区',
  },
  {
    CODE: '500381',
    NAME: '江津区',
    FULL_NAME: '江津区',
  },
  {
    CODE: '500903',
    NAME: '两江新区',
    FULL_NAME: '两江新区',
  },
  {
    CODE: '500193',
    NAME: '高新区',
    FULL_NAME: '重庆高新技术产业开发区',
  },
  {
    CODE: '500100',
    NAME: '主城9区',
    FULL_NAME: '主城9区',
  },
]

const fs = require('fs')

const needRegionName = ['北碚区', '渝北区', '南岸区', '巫溪县']

const codeNames = maps
  .filter(item => needRegionName.includes(item.FULL_NAME))
  .map(item => item.CODE)
console.log('---codeNames', codeNames)

console.log('---->map.length', maps.length)
// var allObject = {
//   type: 'FeatureCollection',
//   features: [],
// }

// codeNames.forEach(item => {
//   var fileContent = fs.readFileSync('./' + item, 'utf-8')
//   var fileObject = JSON.parse(fileContent)
//   console.log('====>fileContent', fileObject.features)
//   allObject.features = allObject.features.concat(fileObject.features)
// })

// const buffer = JSON.stringify(allObject)

// // 写入生成excel
// fs.writeFileSync('./result_1.json', buffer, {
//   flag: 'w',
// })

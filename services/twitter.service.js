export default {
  getTwitter: async () => {
    return {
      profileName: 'Fullstack Developer',
      nickName: '@alex_hcj',
      following: 0,
      followers: 3071,
      img: '',
      tweets: [
        {
          date: '2024-04-15',
          text: 'It’s been a long way, but we’ve just reached a huge 10k sales milestone 🎉 Thanks everyone who trusted us and bought our WordPress themes.'
        },
        {
          date: '2024-02-07',
          text: 'We’ll be releasing a brand new theme soon after one year of research and development.'
        },
        { date: '2023-04-11', text: 'The Affair theme update will arrive very soon with a lot of new features.' }
      ]
    }
  }
}

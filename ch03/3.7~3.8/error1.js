setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주망ㅋ!');
    } catch (err) {
        console.error(err);
    }
}, 1000);
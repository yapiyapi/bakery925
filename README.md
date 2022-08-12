# bakery925

학교 주변 상점들의 홈페이지 개설 목적

단순 웹 프론트

## 8/12 fetch

1. '/bakery925' 화면에 API 출력<br>
app.get('/bakery925',(req,res)=>{<br>
    res.send(req.body);<br>
})

2. 서버 콘솔에 req 데이터 출력<br>
app.post('/bakery925',(req,res)=>{<br>
    console.log(req.body);<br>
})

3. fetch를 통해 post 요청을 보내는 통로 생성

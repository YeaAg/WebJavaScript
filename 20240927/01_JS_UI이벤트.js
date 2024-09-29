const imgTag = document.querySelector('img');
const textArea = document.querySelector('textarea')

textArea.onfocus = () => {
    console.log('에리어 focus되었음');
}

textArea.onblur = () => {
    console.log('에리어 blur되었음');
}

textArea.onselect = () => {
    console.log('에리어 선택');
    
}

console.log(imgTag);
imgTag.onload = () => {
    console.log('img 로드 완료!');
}

window.onscroll = () => {
    console.log('스크롤 중...'); // 안 거는 게 좋음. 사이트 느려짐
}
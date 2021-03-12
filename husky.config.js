const tasks = (arr) => arr.join(' && ');

/*
pre-commit 커밋 메시지를 작성하기 전에 호출됨
prepare-commit-msg 커밋 메시지 생성 후 편집기 실행 전에 호출됨
commit-msg 커밋 메시지와 관련된 명령을 넣을 때 호출됨
post-commit 커밋이 완료되면 호출됨
*/
module.exports = {
    hooks: {
        'pre-commit': tasks([
            // 'lint-staged',
            // 'lerna run build',
            // 'node execTest.js',
        ]),
    },
};

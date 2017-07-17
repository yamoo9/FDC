# GitHub 대용량 파일 관리 방법

Commit 과정에서 지정한 파일을 작게 조각내주어 업로드 과정에서 용량 문제를 없앨 수 있습니다.

![](https://git-lfs.github.com/images/graphic.gif)

# 설정

## 1. Git LFS(Git Large File Storage) 다운로드/설치

[git-lfs.github.com](https://git-lfs.github.com/)에 접속하여 Download 버튼을 눌러 설치 파일을 다운로드 받은 후 설치합니다.

## 2. Git 명령어 환경 익스텐션 설치

명령어 도구에 아래와 같은 명령어를 입력합니다.

```sh
$ git lfs install
```

## 3. 대용량 파일 포멧을 git-lfs 관리 대상으로 등록

Photoshop Document 파일(PSD)을 관리 대상으로 등록합니다.

> `*.psd`, `*.zip`, `*.7z` 등 대용량 관리 파일 포멧을 모두 등록해두면 좋습니다.

```sh
$ git lfs track "*.psd"
# Tracking "*.psd"
```

명령을 통해 등록된 정보는 생성된 `.gitattributes` 파일 내부에서 확인할 수 있습니다.

```sh
*.psd filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
*.7z filter=lfs diff=lfs merge=lfs -text
```

## 4. Git Push

푸쉬(Push) 명령을 수행하면 Git LFS 적용이 된 대용량 파일이 분할 관리되어 업로드 되는 것을 확인할 수 있습니다.

```sh
# git push origin master
$ git push
```

![](../../Assets/Git-LFS.jpg)

## 5. BFG Repo-Cleaner 적용

기존 Commit에서 50MB 보다 큰 대용량 파일의 로그가 있다면 이를 제거해야 합니다. [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)를 이용하면 손쉽게 제거할 수 있습니다. 공식 사이트에서 `bfq-x.x.x.jar`(버전: x.x.x)를 다운로드 받은 후, 대상이 되는 Repository에서 다음과 같은 명령을 수행합니다.

```sh
# bfg-x.x.x.jar 다운로드 받은 버전(x.x.x) 입력 후, 명령을 입력합니다.
$ java -jar bfg-x.x.x.jar --strip-blobs-bigger-than 50M

# 오류 발생 시, 아래 명령을 먼저 실행한 후 위 명령을 다시 시도합니다.
$ git repack && git gc
```
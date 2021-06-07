## 将本地项目推送到github

  1， 在github，点击创建一个新仓库：

  2，建立本地仓库与远程仓库链接：

  + 在项目根目录右键命令行工具输入：

    *git remote add origin [https://github.com/XXXXXX/xxxxx.git](https://link.zhihu.com/?target=https%3A//github.com/tugenhua0707/testgit.git) (这里是你的仓库即项目地址）*

  3， 把项目推送到远程仓库：

  + 同样使用在根目录下的命令行工具输入：

     *git add .*             (点为全部的意思) 把项目所有文件加到缓存区

  + *输入：git commit -m '这里为注释，随便写'* ： 把缓存区里的文件提交到本地仓库

  + *输入：git pull --rebase origin master* 把远程仓库和本地仓库同步

  + *最后输入：git push -u origin master*  **把仓库中的文件推送到github仓库**



  ## error1：

  **[git远程库与本地联系报错fatal: Not a git repository (or any of the parent directories): .git](https://www.cnblogs.com/xinxin1994/p/8484725.html)**

  解决方法：git init



  ## 拉取远程分支到本地

  **git checkout -b version2 origin/origin2（dev为远程仓库的分支名）**


  ## 删除本地分支

  目的：*删除本地分支： dev*

  刚才我们已经创建了dev分支，现在我们开发完成了，要把这个分支删掉

  + 第一步：切换到其他分支：git checkout master

  + 第二步：删除分支 git branch -d dev

  + 第三步：查看所有本地分支：git branch

  ## 删除远程分支

  删除远程分支 git push origin --delete 分支名

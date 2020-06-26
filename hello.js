/**
 *
 * 版本控制 团队开发 前端2位，后台java 2-3 测试1个 UI 1个 产品经理1 原型图
 * 前端 git 仓库 每天下班之后 push code 一次  贡献度
 * 后端 git 仓库
 * svn 15 16年 git 不用联网 暂存区 (小乌龟)
 * 几个常用的命令：五个左右
 * github 写了插件，框架 分享，优化，给建议 给它完善
 * 比较慢
 * 版本控制系统：可以用来记录文件的变化  (分支 -> 树杈)
 * 本地(粘贴复制)、集中式(svn)、分布式(git)
 * 分布式特点：大家的每一台电脑都可以当成一台服务器
 * git: 最流行，最先进 (快照) 备份 js 10 20 30 40
 * 本地执行：100G
 * 三个区域：工作区、暂存区(git commit)、git仓库(云端)
 * 三种状态：已修改(modify: M)， 已暂存(staged: s), 已提交(committed 已经到云端)
 * 装哪些环境：node(cnpm, yarn) git vscode
 * 用户名：zhanglianchang
 * 邮箱：zhanglianchang@itcast.cn
 * npm install yarn -g 全局装包 -> npm -> node_modules ->
 * git config c盘: 用户 -> 主机名称 -> .gitconfig
 *
 * 查看所有的全局配置项
 * git config --list --global
 * 查看单个配置的全局项
 * git config user.name
 * git config user.email
 * 获取帮助信息
 * git config -h (help)
 *
 * 获取 git 仓库的两种方式：
 * 1、需要将本地文件转化成仓库 git init   npm init -> package.json
 * 在你的工程根目录 自动生成 .git 隐藏文件
 * 2、克隆(clone)  git clone 'xxx' 可以将本身存储在云端的仓库复制一份到本地
 *
 * U: 表示这个文件未被追踪 untracked
 * A: 表示这个文件已经添加到追踪文件
 * M: 表示这个文件已经被更改了(modified)
 *
 * git status 用来查看当前文件状态
 * 精简方式：git status -s (short)
 *
 * git add 文件名称   / git add . 表示可以将下面的所有文件一次性全部添加到追踪文件
 *
 * 提交更新：git commit -m '我新添加了一个note.js文件' (message)
 *
 * git init git add git status git status -s git commit -m
 *
 * git add 三种作用：
 * 1、把未被追踪的文件添加到暂存区
 * 2、把已修改的文件添加暂存区
 * 3、冲突 -> 解决掉以后，git add 添加暂存区
 *
 * git add .
 * git status -s
 * git commit -m '提交消息'
 * 撤销对文件的修改：git checkout -- 文件名称
 * 取消暂存：git reset HEAD 文件名称
 * 跳过添加暂存区：git commit -a -m '描述信息'
 *
 * 移除文件：
 * 本地仓库和本地工作区：git rm -f 文件名称 （危险）
 * 本地工作区：git rm --cached 文件名称
 *
 * 忽略文件：.gitignore
 * 回退：git reset --hard 哈希值
 * git reflog --oneline 一行显示，简洁一点
 *
 * -------- 重点 --------
 * git init
 * git add / git add .
 * git status / git status -s
 * git commit -m '描述信息'
 * -------- 重点 --------
 *
 * 注意点1：git commit -a -m '描述信息'
 * 有效的文件是：之前被添加到追踪文件，修改后的文件
 *
 * 注意点2：忽略文件忽略的是之前没有被添加到追踪文件的
 *
 */
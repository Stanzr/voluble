require 'capistrano/ext/multistage'

set :application, "voluble"
set :node_file, "index.js"
set :host, "69.164.202.158"
set :repository,  "git@github.com:Stanzr/voluble.git"
set :stages, %w[staging production]
set :default_stage, 'staging'
set :use_sudo, false
set :ssh_options, { :forward_agent => true }
set :shared_children, %w()
set :normalize_asset_timestamps, false

set :scm, :git
set :branch, "master"
set :git_shallow_clone, 1
set :deploy_via, :copy
set :copy_compression, :zip
set :deploy_to, "/var/www/#{application}"

role :app, host

set :user, "voluble"
set :group, "voluble"

namespace :deploy do
  desc "Start application with forever"
  task :start, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && NODE_ENV=#{default_stage} forever start #{node_file}"
  end

  desc "Stop application"
  task :stop, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && NODE_ENV=#{default_stage} forever stop #{node_file}"
  end

  desc "Restart application"
  task :restart, :roles => :app, :except => { :no_release => true } do
    stop
    sleep 1
    start
  end

  desc "Install npm modules"
  task :npm_install do
    run "cd #{release_path} && npm install ."
  end

end

after "deploy:finalize_update", "deploy:cleanup"
after "deploy:update_code", "deploy:npm_install"

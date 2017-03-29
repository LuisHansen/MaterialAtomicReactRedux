# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

	config.vm.box = "ubuntu/trusty64"
	config.vm.post_up_message = "CoDE v3"

	config.vm.synced_folder ".", "/dashboard-app"

	# IP estático da VM
	config.vm.network "private_network", ip: "192.168.50.5"

	config.vm.provider "virtualbox" do |vb|
		vb.memory = "2048"
	end

	config.vm.provision :shell, path: "provisioning.sh"

end

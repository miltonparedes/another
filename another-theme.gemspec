# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "another-theme"
  spec.version       = "1.0.0"
  spec.authors       = ["Milton Olaf P"]
  spec.email         = ["hey@miltonolaf.com"]

  spec.summary       = "Another theme for Jekyll"
  spec.homepage      = "https://miltonolaf.com/another"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.6"
  spec.add_runtime_dependency 'jekyll-paginate'
  spec.add_runtime_dependency 'jekyll-seo-tag'
  spec.add_runtime_dependency 'jekyll-sitemap'
  spec.add_runtime_dependency 'jekyll-algolia'


  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end

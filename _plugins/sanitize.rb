 module Jekyll
  module RegexFilter

    def sanitize_filename(name)
      name = name.gsub(/[^\w\s_-]+/, '')
      name = name.gsub(/(^|\b\s)\s+($|\s?\b)/, '\\1\\2')
      name = name.gsub(/\s+/, '_')
      name = "/" + name + ".html"
    end

  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)

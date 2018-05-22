<?php

/**
 * Class WordDirWebSettingsStructureDocFile
 * @version  1.0.2
 * @author v.raskin
 * @package vsword.structure
 */
class WordDirWebSettingsStructureDocFile extends StructureDocFile {

    public function __construct() {
        $this->name = 'webSettings.xml';
    }

    public function getContent() {
        return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:webSettings xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" mc:Ignorable="w14"><w:optimizeForBrowser/><w:allowPNG/></w:webSettings>';
    }

}
